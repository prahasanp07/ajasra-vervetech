<?php
/**
 * Ajasra Vervetech - Contact Form Mailer Backend (cPanel / PHP)
 * Dispatches customer inquiries directly to the company inbox via server mail.
 */

// 1. Set Response Headers (JSON & CORS)
header('Content-Type: application/json; charset=UTF-8');
// Same-origin only: the site and this endpoint are served from the same domain,
// so no CORS headers are emitted (cross-origin browsers are denied by default).
header('X-Content-Type-Options: nosniff');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Use POST.'
    ]);
    exit();
}

// 2. Read and decode JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to standard form POST if JSON not provided
    $data = $_POST;
}

// 3. Extract & Sanitize Fields
function clean_input($data) {
    if (is_null($data) || !is_scalar($data)) return '';
    $data = trim((string)$data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

$name            = clean_input($data['name'] ?? '');
$phone           = clean_input($data['phone'] ?? '');
$email           = clean_input($data['email'] ?? '');
$quantity        = clean_input($data['quantity'] ?? '');
$materialDetails = clean_input($data['materialDetails'] ?? ($data['material_details'] ?? ''));
$inquiryMessage  = clean_input($data['message'] ?? '');
$botcheck        = $data['botcheck'] ?? false;

// Raw, newline-free copies for use in mail headers (never HTML-escaped, never contain CR/LF)
function header_safe($value) {
    return trim(preg_replace('/[\x00-\x1F\x7F]+/', ' ', is_scalar($value) ? (string)$value : ''));
}
$rawName  = mb_substr(header_safe($data['name'] ?? ''), 0, 100);
$rawEmail = header_safe($data['email'] ?? '');

// Length limits to keep the mailer from being used as a bulk relay
$name            = mb_substr($name, 0, 100);
$phone           = mb_substr($phone, 0, 30);
$email           = mb_substr($email, 0, 150);
$quantity        = mb_substr($quantity, 0, 100);
$materialDetails = mb_substr($materialDetails, 0, 3000);

// Honeypot anti-spam verification
if (!empty($botcheck)) {
    // Spam bot caught by honeypot
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message filtered.']);
    exit();
}

// Basic per-IP rate limit: max 5 submissions per 10 minutes
$rateDir  = sys_get_temp_dir();
$rateFile = $rateDir . '/ajasra_rl_' . md5($_SERVER['REMOTE_ADDR'] ?? 'unknown') . '.json';
$now      = time();
$hits     = [];
if (is_readable($rateFile)) {
    $decoded = json_decode((string)@file_get_contents($rateFile), true);
    if (is_array($decoded)) {
        $hits = array_values(array_filter($decoded, function ($t) use ($now) { return is_int($t) && ($now - $t) < 600; }));
    }
}
if (count($hits) >= 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try WhatsApp or try again later.']);
    exit();
}
$hits[] = $now;
@file_put_contents($rateFile, json_encode($hits), LOCK_EX);

// 4. Validate Required Fields
if (empty($name) || empty($phone) || empty($materialDetails)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields (Name, Phone, Material Details).'
    ]);
    exit();
}

// 5. Configure Email Parameters
$toEmail = 'info@ajasravervetech.com'; // Primary recipient inbox
$subject = "New Hot Dip Galvanizing Inquiry from " . $rawName;

// Fallback formatted text if details exist
$displayEmail    = !empty($email) ? $email : 'Not provided';
$displayQuantity = !empty($quantity) ? $quantity : 'Not specified';
$submissionTime  = date('d-M-Y H:i:s T');
$ipAddress       = $_SERVER['REMOTE_ADDR'] ?? 'Unknown IP';

// 6. Build HTML Email Body
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0b1724; margin: 0; padding: 20px; background-color: #f4f6f8; }
        .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e1e8ed; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .header { background: #0B1724; color: #ffffff; padding: 24px 30px; }
        .header h2 { margin: 0; font-size: 20px; color: #D8F35D; letter-spacing: -0.02em; }
        .header p { margin: 6px 0 0 0; font-size: 13px; color: #a0aec0; }
        .content { padding: 30px; }
        .field-group { margin-bottom: 20px; }
        .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #718096; margin-bottom: 4px; }
        .field-value { font-size: 15px; font-weight: 600; color: #1a202c; }
        .details-box { background: #f8fafc; border-left: 4px solid #D8F35D; padding: 16px; border-radius: 4px; font-size: 14px; color: #2d3748; white-space: pre-wrap; }
        .footer { background: #edf2f7; padding: 16px 30px; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; text-align: center; }
        .badge { display: inline-block; background: #e2f9d2; color: #235c10; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 9999px; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h2>Ajasra Vervetech — New Customer Lead</h2>
            <p>Direct Hot Dip Galvanizing inquiry received from the website portal</p>
        </div>
        <div class="content">
            <div class="field-group">
                <div class="field-label">Customer / Company Name</div>
                <div class="field-value">{$name}</div>
            </div>
            
            <div style="display: flex; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;">
                <div style="flex: 1; min-width: 200px;">
                    <div class="field-label">Phone / WhatsApp</div>
                    <div class="field-value"><a href="tel:{$phone}" style="color: #0b1724; text-decoration: none;">{$phone}</a></div>
                </div>
                <div style="flex: 1; min-width: 200px;">
                    <div class="field-label">Customer Email</div>
                    <div class="field-value">{$displayEmail}</div>
                </div>
            </div>

            <div class="field-group">
                <div class="field-label">Approximate Quantity / Tonnage</div>
                <div class="field-value">{$displayQuantity}</div>
            </div>

            <div class="field-group">
                <div class="field-label">Material & Project Details</div>
                <div class="details-box">{$materialDetails}</div>
            </div>
            
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #e2e8f0;">
                <span class="badge">IS 2629 Standard Quality Lead</span>
            </div>
        </div>
        <div class="footer">
            Submitted on {$submissionTime} &bull; Origin: {$ipAddress} &bull; Ajasra Vervetech Website
        </div>
    </div>
</body>
</html>
HTML;

// 7. Email Headers
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Ajasra Web Portal <' . $toEmail . '>';

if ($rawEmail !== '' && filter_var($rawEmail, FILTER_VALIDATE_EMAIL)) {
    // Address only: no display name, so user input can never alter header structure
    $headers[] = 'Reply-To: ' . $rawEmail;
}

$headers[] = 'X-Mailer: PHP/' . phpversion();

// 8. Send Email using PHP mail()
$mailSent = @mail($toEmail, $subject, $htmlBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry received and dispatched successfully.'
    ]);
} else {
    // Log error internally if mail() failed
    error_log("Ajasra Mailer: mail() failed for inquiry from " . $name);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send email via server mailer. Please try WhatsApp.'
    ]);
}
