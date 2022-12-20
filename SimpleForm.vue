<template>
    <section>
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <!--THis is to create the label for our sign in sheet-->
                    <label for="fullName">Full name:</label>
                    <!--This is to create a input for the user and as well as being able to make it into a vaule that can be
                    past on with v-model-->
                    <input type="text" id="fullName" v-model="name">
                </div>
                
                <div class="form-group">
                  <!--THis is to create the label for our sign in sheet-->
                    <label for="email">Email:</label>
                    <!--This is to create a input for the user and as well as being able to make it into a vaule that can be
                    past on with v-model-->
                    <input type="email" id="email" v-model="email">
                </div>
  
                <div class="form-group">
                    <label for="massage">Massage:</label>
                    <!--This is to create a input for the user and as well as being able to make it into a vaule that can be
                    past on with v-model-->
                    <textarea id="massage" rows="5" v-model="message"></textarea>
                </div>
  
                <button type="submit">Submit</button>
            </form>
        </div>
  
        <div>
            <!--This is where we make it display our storeage vaule form v-model, giving us a test so we can implent it else where if needed-->
            <p>Result</p>
            <p>Name: {{ name }}</p>
            <p>Email: {{ email }}</p>
            <p>Massage: {{ message }}</p>
        </div>
    </section>
  </template>
  
  <script>

  export default {

  data() {
    //THis is where the data is store from v-model and is also the var name from from we call from the html page
      return {
          name: '',
          email: '',
          message: ''
      }
  },
  methods: {
    //this handle the sumbiting of the page when you hit the button.
    //It store the vaule from when you hit the button so anyhting inside the field is going to be store into the var
    handleSubmit() {
      let userMessage = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      //where we store the usermEssages and add it to the var since it is a string.
      projectFirestore.collection('userMessages').add(userMessage)
    }
  }
  }
  </script>
  
  <style>
  * {
    box-sizing: border-box;
    font-family: "Montserrat";
  }
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
  }
  .form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
  }
  textarea {
    resize: vertical;
  }
  button {
    width: 100%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>