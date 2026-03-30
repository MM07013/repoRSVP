function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RSVP Responses");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("RSVP Responses");
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "How Many People Attending",
      "Email Address",
      "Address",
      "City",
      "State",
      "Zip",
      "Phone",
      "Will Attend",
      "Comments"
    ]);
  }

  sheet.appendRow([
    new Date(),
    e.parameter.fullName || "",
    e.parameter.guestCount || "",
    e.parameter.email || "",
    e.parameter.address || "",
    e.parameter.city || "",
    e.parameter.state || "",
    e.parameter.zip || "",
    e.parameter.phone || "",
    e.parameter.attendance || "",
    e.parameter.comments || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
