function FindProxyForURL(url, host) {
  // basic function; do not change
  if (isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

  if (dnsDomainIs(".azure.com",".azure.net")) {
    return "PROXY localhost:3128; DIRECT"; // sets connection through Web Appliance.
  }

 else {
    // If not true...
    return "DIRECT"; // If true, sets "DIRECT" connection
  }
}
