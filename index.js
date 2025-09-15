async function showImage(){
      try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");  
        let data = await res.json();
        document.getElementById("myImage").src = data.message;
      } catch (error) {
        console.log("Error fetching image:", error);
      }
}