class TipoProducto{
    constructor(codigo, nombre, impuesto){
        this.codigo = codigo
        this.impuesto = impuesto
        this.nombre = nombre
    }
}

class Proveedor{
    constructor(codigo, nombre){
        this.codigo = codigo
        this.codigo = nombre
    }


}

class Producto{
    constructor(codigo, tipo, stockDisponible, precio, proveedor, stockMinimo){
        this.codigo = codigo
        this.tipo = tipo
        this.precio = precio
        this.proveedor = proveedor
        this.stockDisponible = stockDisponible
        this.stockMinimo = stockMinimo
    }


}

export {
    TipoProducto,
    Proveedor,
    Producto, 
}