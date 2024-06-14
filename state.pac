function FindProxyForURL(url, host) {
  // basic function; do not change
  if (isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

  if (dnsDomainIs(host, ".azure.com")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

if (dnsDomainIs(host, ".azure.net")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

if (dnsDomainIs(host, "pki.state.de.us")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

if (dnsDomainIs(host, ".lab.lan")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

 else {
    // If not true...
    return "DIRECT"; // If true, sets "DIRECT" connection
  }
}
