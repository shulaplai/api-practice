const express = require ('express')
const request = require ('request-promise')

const app = express()
const PORT = process.env.PORT || 5000;
const apiKey = 'f27ffe41c56de4e69f2ab53dedc607eb';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json());

app.get('/', (req,res)=> {
    res.send('welcome, ha.')
})
// get product detail 
app.get('/products/:productId', async (req,res) => {
    const {productId} = req.params;
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    } catch (error){
        res.json(error);
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
