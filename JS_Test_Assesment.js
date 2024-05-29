/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const madhavNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, favColor, accessory, pet) {
    const myNFT ={ 
    "name": name,
    "favColor": favColor,
    "accessory": accessory,
    "pet": pet

    }
    
    madhavNFTs.push(myNFT);
    console.log("Successfully Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i = 0; i < madhavNFTs.length; i++) {
    console.log("ID: " + (i+1));
    console.log("Name:  " + madhavNFTs[i].name);
    console.log("Favorite Color: " + madhavNFTs[i].favColor);
    console.log("Favorite Accessory: "+ madhavNFTs[i].accessory);
    console.log("Pet: " + madhavNFTs[i].pet);
    
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total Supply: " + madhavNFTs.length);
}

// call your functions below this line
mintNFT("Ajay", "Black", "Rings", "Hamster");
mintNFT("Sam", "Red", "Siver Chain", "Dog");
mintNFT("Dev", "Grey", "Tatoo", "Cat");
mintNFT("Mohit", "Orange", "Piercings", "Parrot");

listNFTs();
console.log("\n");
getTotalSupply();
