var express = require('express');
const { Session } = require('express-session');
const Cart = require('../cart');
var router = express.Router();

router.get('/', (req, res, next)=>{
    const cart = new Cart(req.session.cart ? req.session.cart.items : {});
    res.render('layout', { title: 'Express', partials: { content: 'cart' }, items: cart.displayItems(), cartTotal: cart.getTotal() });
}

)

router.post('/', (req, res, next)=>{
    req.session.destroy();
    res.redirect('/');
})
module.exports = router;