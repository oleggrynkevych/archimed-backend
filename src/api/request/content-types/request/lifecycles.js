module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'oleg252.og@gmail.com',
              from: 'oleg252.og@gmail.com', // e.g. single sender verification in SendGrid
              
              subject: 'The Strapi Email plugin worked successfully',
              text: '${result.Name}', // Replace with a valid field ID
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}