// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

//  For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// My Solution :

function domainName(url) {
  const hasProtocol = /^https?:\/\//.test(url);
  if (!hasProtocol) {
    url = "http://" + url;
  }

  let hostname = new URL(url).hostname;

  // Assumes that any subdomain is explicitly "www" and not something else
  const subdomain = "www.";

  if (hostname.includes(subdomain)) {
    hostname = hostname.replace(subdomain, "");
  }

  return hostname.split(".")[0];
}

export default domainName;

// Oh wow, at first the kata seemed simple, but it turned out to be much more complicated than it looked!
// The kata instructions were a bit unclear, since a subdomain can be anything,
// not just "www" (for example: blog.example.com), and the tests don't cover this case.
// In that situation, the logic would need to use the official list of TLDs
// (https://publicsuffix.org/list/public_suffix_list.dat), remove the TLD to get the main domain,
// or use a suitable library like "tldts" to do it efficiently.
// At least I got to explore regex a bit and learned about the URL API.
