    var key = privnote_common.make_password(),
        enc = privnote_common.encrypt(note, key);
var post_data = querystring.stringify({
  data: enc,
  has_manual_pass: false,
  duration_hours: 0,
  data_type: "T",
  dont_ask: !opts.ask,
  notify_email: null,
  notify_ref: null
});

var post_options = {
  host: "privnote.com",
  port: 443,
  path: "/legacy/",
  method: "POST",
  headers: {
    "Content-Length": post_data.length,
    Origin: "https://privnote.com",
    "Accept-Language": "en-US,en;q=0.8",
    "User-Agent":
      "privnote-cli/" +
      version +
      " (https://github.com/nonrational/privnote-cli)",
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json, text/javascript, */*",
    Referer: "https://privnote.com/",
    "X-Requested-With": "XMLHttpRequest",
    Connection: "keep-alive",
    DNT: "1"
  }
};
