import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer k9DXrg_r4L8CHK4wVP0SUbAtZxrc43nWshVP28OrtAlkeDT2x1nZ5OWyfi_M8oqp56-efKnVnd4f2xy0envyS0iRdye6X98dOwXCsUe_ULlf2wF4oolm_6ijoQEiYnYx',
    },
});