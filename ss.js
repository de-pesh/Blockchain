const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "certificate",
        type: "string",
      },
    ],
    name: "addCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
    ],
    name: "AuthorizationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "certificateHash",
        type: "bytes32",
      },
    ],
    name: "CertificateAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authorizedAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "changeAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        internalType: "string",
        name: "n",
        type: "string",
      },
    ],
    name: "ininElection",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "certificate",
        type: "string",
      },
    ],
    name: "updateCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "x",
        type: "bool",
      },
    ],
    name: "Vote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "getAuthorisedStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCertificates",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "isrc",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getKeys",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "getNamee",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotingStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auth",
        type: "address",
      },
    ],
    name: "verifyAuthority",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "certificate",
        type: "string",
      },
    ],
    name: "verifyCertificate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const address = "0x6Ee83EcC201c1a051111E0bF1A44C55D8c605d6E";

async function Verify() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var certificate = document.getElementById("cert_id").value;
    var web3 = new Web3(window.ethereum);

    var contract = new web3.eth.Contract(abi, address);

    await contract.methods
      .verifyCertificate(certificate)
      .call()
      .then(function (result) {
        if (result == true) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "The document is Verified";
          output.style.background = "rgba(136, 255, 0, 0.5)";
          output.style.color = "rgb(33, 33, 33) ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        } else {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "The document is not Verified";
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
      })
      .catch(function (tx) {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = tx;
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      });
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    var output = document.getElementById("balance");
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function AddCertificate() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var certificate = document.getElementById("cert_id").value;
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised for this action";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status = false;
      await contract.methods
        .verifyCertificate(certificate)
        .call()
        .then(function (result) {
          status = result;
        });
      console.log(status);
      if (status == false) {
        await contract.methods
          .addCertificate(certificate)
          .send({ from: accounts[0] })
          .then(function () {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Certificate is added";
            output.style.background = "rgba(136, 255, 0, 0.5)";
            output.style.color = "rgb(33, 33, 33) ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          })
          .catch(function (error) {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Transaction declined";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          });
      } else {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "Certificate already exists";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function AddAuthority() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";
  var name = document.getElementById("name_id").value;
  var authority = document.getElementById("cert_id").value;
  var correct_name =
    authority.charAt(0) == "0" &&
    authority.charAt(1) == "x" &&
    authority.length == 42;
  console.log(name);
  console.log(correct_name);
  if (correct_name) {
    if (window.ethereum) {
      var accounts = await ethereum.request({ method: "eth_requestAccounts" });

      var web3 = new Web3(window.ethereum);
      var contract = new web3.eth.Contract(abi, address);

      var validUser = false;
      await contract.methods
        .verifyAuthority(accounts[0])
        .call()
        .then(function (result) {
          validUser = result;
        });
      if (validUser == false) {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "You are not authorised for this action";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      } else {
        var status = false;
        await contract.methods
          .verifyAuthority(authority)
          .call()
          .then(function (result) {
            status = result;
          });
        console.log(status);
        if (status == false) {
          await contract.methods
            .ininElection(authority, name)
            .send({ from: accounts[0] })
            .then(function () {
              load.style.display = "none";
              output.style.display = "flex";
              output.textContent = "Voting process Initiated";
              output.style.background = "rgba(136, 255, 0, 0.5)";
              output.style.color = "rgb(33, 33, 33) ";
              output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            })
            .catch(function (error) {
              load.style.display = "none";
              output.style.display = "flex";
              output.textContent = error;
              output.style.background = "rgb(255, 36, 36)";
              output.style.color = "white ";
              output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            });
        } else {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "Already authorised";
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
      }
    } else {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "Please check metamask";
      output.style.background = "rgba(20, 20, 20, 0.5)";
      output.style.color = "rgb(255, 223, 223)";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please enter correct address";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function RemoveAuthority() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var authority = document.getElementById("cert_id").value;
    var name = document.getElementById("name_id").value;
    var output = document.getElementById("balance");
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var status = false;
    await contract.methods
      .verifyAuthority(authority)
      .call()
      .then(function (result) {
        status = result;
      });
    console.log(status);
    if (status == true) {
      await contract.methods
        .changeAuthorization(authority, false, name)
        .send({ from: accounts[0] })
        .then(function () {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "Authority Removed";
          output.style.background = "rgba(136, 255, 0, 0.5)";
          output.style.color = "rgb(33, 33, 33) ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        })
        .catch(function (error) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = error;
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        });
    } else {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "Given Address has no Authority";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function Authority() {
  var output = document.getElementById("loading");
  output.style.display = "flex";
  if (window.ethereum) {
    var web3 = new Web3(window.ethereum);

    var contract = new web3.eth.Contract(abi, address);

    await contract.methods
      .getVotingStatus()
      .call()
      .then(function (result) {
        if (result == true) {
          output.style.display = "none";
          window.location.href = "vote.html";
        } else {
          output.style.display = "none";
          window.location.href = "addAuth.html";
        }
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });
  } else {
    console.log("meta issue");
  }
}

async function FetchVoteData() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var id = document.getElementById("text_cert_upload_data_id");
    var nm = document.getElementById("text_cert_upload_data");
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    //get data
    var name;
    var add;
    await contract.methods
      .getName()
      .call()
      .then(function (result) {
        name = result;
      });

    await contract.methods
      .getAddress()
      .call()
      .then(function (result) {
        add = result;
      });

    let text = document.createTextNode(name);
    let text2 = document.createTextNode(add);
    id.appendChild(text2);
    nm.appendChild(text);
    load.style.display = "none";
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function Vote(v) {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);

    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised to Vote";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status;
      var issue = false;
      await contract.methods
        .Vote(v)
        .send({ from: accounts[0] })
        .then(function (result) {
          status = result;
        })
        .catch(function (error) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "Transaction Rejected";
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white";
          output.style.boxShadow = "20px 20px 16px  #3a3a3a";
          console.log("transaction issue");
          issue = true;
        });
      console.log(issue);
      // console.log(typeof status);
      if (!issue) {
        if (!v) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "Voting ends, Institute is not trusted by all";
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white";
          output.style.boxShadow = "20px 20px 16px  #3a3a3a";
        } else {
          await contract.methods
            .getVotingStatus()
            .call()
            .then(function (result) {
              if (result == true) {
                load.style.display = "none";
                output.style.display = "flex";
                output.textContent =
                  "Thanks for voting, Wait for other members";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
              } else {
                load.style.display = "none";
                output.style.display = "flex";
                output.textContent = "Voting ends, Institute is trusted by All";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
              }
            })
            .catch(function (error) {
              load.style.display = "none";
              output.style.display = "flex";
              output.textContent = "Transaction Rejected";
              output.style.background = "rgb(255, 36, 36)";
              output.style.color = "white";
              output.style.boxShadow = "20px 20px 16px  #3a3a3a";
              console.log("transaction issue");
            });
        }
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function GetName() {
  console.log("function called");
  var ins = document.getElementById("data");
  var but = document.getElementById("some_but");

  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var web3 = new Web3(window.ethereum);
    console.log(accounts[0]);
    var contract = new web3.eth.Contract(abi, address);
    var name;

    await contract.methods
      .getVotingStatus()
      .call()
      .then(function (result) {
        if (result == true) {
          but.textContent = "Vote for new Institute";
        } else {
          // let text = document.createTextNode("");
          but.textContent = "Add new Institute";
        }
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });

    await contract.methods
      .getNamee(accounts[0])
      .call()
      .then(function (result) {
        console.log(result);
        let text = document.createTextNode(result);
        ins.appendChild(text);
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });

    load.style.display = "none";
  } else {
    load.style.display = "none";
    console.log("meta error");
  }
}

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

async function AuthorityList() {
  var output = document.getElementById("balance");
  var load = document.getElementById("loading");
  load.style.display = "flex";
  output.style.display = "none";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var status;
    await contract.methods
      .getKeys()
      .call()
      .then(function (result) {
        status = result;
      });
    status = removeDuplicates(status);
    console.log(status);
    var names = [];
    for (i in status) {
      await contract.methods
        .getNamee(status[i])
        .call()
        .then(function (result) {
          names.push(result);
        });
    }
    for (n in names) {
      console.log(names[n]);
    }

    let myDiv = document.getElementById("auth_area");
    for (i in status) {
      let button = document.createElement("BUTTON");
      let button2 = document.createElement("BUTTON");

      let text = document.createTextNode("ADDRESS: " + status[i]);
      let text2 = document.createTextNode("NAME: " + names[i].toUpperCase());

      button.style.width = "100%";
      button.style.marginBottom = "50px";
      button.style.fontSize = "large";

      button2.style.marginBottom = "10px";
      button2.style.fontSize = "large";
      button2.style.background = "#aff2ff";
      button2.style.width = "100%";

      // appending text to button
      button.appendChild(text);
      button2.appendChild(text2);
      // appending button to div
      myDiv.appendChild(button2);
      myDiv.appendChild(button);
    }
    load.style.display = "none";
  } else {
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    load.style.display = "none";
  }
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function UpdateFilter() {
  console.log("updating...");
  var butt = document.getElementById("viewB");
  butt.style.background = "red";
  butt.style.color = "white";
  for (var i = 0; i < 10000; i++) {}
  butt.disabled = true;
  const web3 = new Web3(
    "https://sepolia.infura.io/v3/efc3e3e727fe491798d7f7e58776600f"
  );

  var contract = new web3.eth.Contract(abi, address);
  var farray;

  // Example: Call a View/Pure Function

  await contract.methods.getCertificates().call((error, result) => {
    if (!error) {
      //   console.log(result);
      //   console.log("ho gaya")
      let i = 0;

      while (i < result.length) {
        // console.log(result[i]);

        var sizeoffilter = 1000000;

        // var x = sha256(result[i].toString);
        var x = result[i].toString();
        // console.log(typeof(result[i]));
        // console.log(i,"-", x);
        // console.log(BigInt(x) % BigInt(sizeoffilter));
        var remaining = Number(BigInt(x) % BigInt(sizeoffilter));
        localStorage.setItem(remaining, true);
        i++;
      }
      console.log(result.length);
    } else {
      console.log(error);
    }
  });
  butt.disabled = false;
  butt.style.background = "#1ad9ff";
  butt.style.color = "black";
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function Verifyyy() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  // if (window.ethereum) {
  var certificate = document.getElementById("cert_id").value;
  // var certificate = ((Math.random() * 100000).toString() + "xxxx");
  var sizeoffilter = 1000000;
  var x = await sha256(certificate);
  var x = "0x" + x;
  // console.log(x);
  // console.log(BigInt(x) % BigInt(sizeoffilter));
  var remaining = Number(BigInt(x) % BigInt(sizeoffilter));
  var valid = localStorage.getItem(remaining);
  console.log(valid);
  if (!valid) {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Certificate is not Verified (Request Filtered) ";
    output.style.background = "rgb(255, 36, 36)";
    output.style.color = "white ";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Verified (Waiting for Confirmation)";
    output.style.background = "rgba(136, 255, 0, 0.1)";
    output.style.color = "rgb(33, 33, 33) ";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    //   var web3 = new Web3(window.ethereum);
    const web3 = new Web3(
      "https://sepolia.infura.io/v3/efc3e3e727fe491798d7f7e58776600f"
    );

    var contract = new web3.eth.Contract(abi, address);

    // Example: Call a View/Pure Function
    contract.methods.verifyCertificate(certificate).call((error, result) => {
      // console.log("something");
      if (!error) {
        console.log("yes");
        if (result == true) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "The document is Verified";
          output.style.background = "rgba(136, 255, 0, 0.5)";
          output.style.color = "rgb(33, 33, 33) ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        } else {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "The document is not Verified";
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
      } else {
        console.error(error);
      }
    });
  }
}

async function Check() {
  var output = document.getElementById("balance");

  var id = document.getElementById("userid").value;
  var pass = document.getElementById("pass").value;
  if (id == "admin" && pass == "admin") {
    if (window.ethereum) {
      window.location.href = "/admin.html";
    } else {
      output.textContent = "No accounts Detected";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      output.style.borderRadius = "40px";
    }
  } else {
    output.textContent = "Invalid UserId or Password";
    output.style.background = "rgb(255, 36, 36)";
    output.style.color = "white ";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    output.style.borderRadius = "40px";
  }
}

async function Discard() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var certificate = document.getElementById("cert_id").value;
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised for this action";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status = false;
      await contract.methods
        .verifyCertificate(certificate)
        .call()
        .then(function (result) {
          status = result;
        });
      console.log(status);
      if (status == true) {
        await contract.methods
          .updateCertificate(certificate)
          .send({ from: accounts[0] })
          .then(function () {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Certificate is discarded";
            output.style.background = "rgba(136, 255, 0, 0.5)";
            output.style.color = "rgb(33, 33, 33) ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          })
          .catch(function (error) {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Transaction Failed";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          });
      } else {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "Certificate doesn't exist";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}
