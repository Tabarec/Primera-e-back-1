import { Router } from "express";
import cartManager from "../managers/cartManager.js";

const router = Router();

router.post("/carts", async (req, res) => {
  try {
    const cart = await cartManager.createCart();

    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.get("/carts/:cid", async (req, res) => {
  try {
    const { cid } = req.params;

    const cart = await cartManager.getCartById(cid);
    if(!cart) return res.status(404).json({status: "error", msg: "El carrito no ha sido encontrado"})
      
    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.post("/carts/:cid/product/:pid", async (req, res) => {
  try {
    const { cid, pid } = req.params;
    if(!cart) return res.status(404).json({status: "error", msg: "El carrito no ha sido encontrado"})

      if(!product) return res.status(404).json({status: "error", msg: "El producto no ha sido encontrado"})
    
    const cart = await cartManager.addProductToCart(cid, pid);

    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

export default router;