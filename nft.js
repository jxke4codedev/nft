const NFTs = []

function mintNFT (_name, _eyeColor, _shirtType, _bling) {
  const NFT = {
    "name": _name,
    "eyecolor": _eyeColor,
    "shirtType": _shirtType,
    "bling": _bling
  }
   NFTs.push(NFT);
   console.log("minted: " + _name);
}

function listNFTs () {
 for(let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (1 + 1));
    console.log("\nName: \t\t" + NFTs[i].name);
    console.log("eyecolor: \t" + NFTs[i].eyecolor);
    console.log("shirtType: " + NFTs[i].shirtType);
    console.log("bling: \t\t" + NFTs[i].bling);
 }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Bianca", "Green", "Dress", "Gold Chain");
mintNFT("Raine", "Green", "Dress", "Gold Chain");
mintNFT("Jake", "Green", "Dress", "Gold Chain");
mintNFT("Esteban", "Green", "Dress", "Gold Chain");
listNFTs();
getTotalSupply();
