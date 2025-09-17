async function fetchUser() {
     const num=document.getElementById("userId").value;
     const output=document.getElementById("output")
     try{
          const res=await fetch(`https://fakestoreapi.com/users/${num}`);
          const data=await res.json();
           if (!data.id) {
            throw new Error("User not exist");
          }
          output.innerHTML= `
            <div class="user-card">
            <h2>${data.name.firstname} ${data.name.lastname}</h2>
            <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>City:</strong> ${data.address.city}</p>
            </div>
          `
          console.log(data);

     }
     catch(error){
          console.log("User not exist")
          setTimeout(()=>{
               window.location.href='error.html'
          },3000)
     }
}