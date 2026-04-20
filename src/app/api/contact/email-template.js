export const emailTemplate = (
  name,
  company_name,
  email,
  cityCountryTitle,
  cityCountryValue,
  city,
  phoneDisplay,
  message
) => `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=windows-1250">
        <meta name="generator" content="Contact Form API">
        <title></title>
        <style type="text/css">span.go{display:none} .go{display:none}</style>
      </head>
      <body>
        <div style="font-family:arial;font-size:12px;font-weight:normal;color:#000000;background:#ffffff;border:10px solid #cccccc;width:600px;padding:20px;margin: 0px auto;">
          <table border="1" cellpadding="5" style="width:500px;font-family:arial;font-size:12px;font-weight:normal;color:#000000;border-collapse:collapse;border:1px solid #cccccc;border-color:#cccccc">
            <tbody>
              <tr>
                <td colspan="2" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000;border-bottom:3px solid #cccccc"><b>Enquiry Details</b></td>
              </tr>
              
              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Name:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${name}</b></td>
              </tr>

              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Company Name:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${company_name}</b></td>
              </tr>
              
              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Email:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${email}</b></td>
              </tr>

              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">${cityCountryTitle}:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${cityCountryValue}</b></td>
              </tr>

              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">City:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${city}</b></td>
              </tr>

              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Mobile:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000"><b>${phoneDisplay}</b></td>
              </tr>
              
              <tr>
                <td align="right" style="font-family:arial;font-size:12px;font-weight:normal;color:#000000">Message:</td>
                <td style="font-family:arial;font-size:12px;font-weight:normal;color:#000000;line-height:17px"><b>${message}</b></td>
              </tr>

            </tbody>
          </table>
        </div>
      </body>
    </html>
    `;
