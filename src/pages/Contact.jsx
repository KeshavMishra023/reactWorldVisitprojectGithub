export const Contact = () => {
    const handleFormSumbit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
        
    };

    return (
        <section className="section-contact">
           <h2 className="container-title">Contact Us</h2>
          <div className="contact-wrapper container">
             <form action={handleFormSumbit}>
                <input type="text" 
                required 
                autoCapitalize="false" 
                placeholder="Enter your name" 
                name="username" 
                className="form-control" 
                 />
               <input type="email" 
                required 
                autoCapitalize="false" 
                placeholder="Enter your email" 
                name="email"
                className="form-control" 
                />
                <textarea 
                name="message"
                rows="10"
                required
                autoCapitalize="false"
                className="form-control" >
                 </textarea>
               <button type="sumbit" value="send">Send</button>
              </form>
          </div>
        </section>
    );
}