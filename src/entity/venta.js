class Cliente {
    constructor(cedula, nombres, telefono, direccion) {
        this.cedula = cedula
        this.nombres = nombres
        this.telefono = telefono
        this.direccion = direccion
    }

}


class Pago {
    constructor(monto) {
        this.monto = monto
    }
 
}


class Efectivo extends Pago {
    constructor(monto) {
        this.super(monto)

    }
 
}


class Credito extends Pago {
    constructor(monto, fecha, numero) {
        this.super(monto)
        this.fecha = fecha
        this.numero = numero
    }

}


class Venta {
    constructor(numero, fecha, cliente, subtotal, impuesto, total) {
        this.numero = numero
        this.fecha = fecha
        this.cliente = cliente
        this.subtotal = subtotal
        this.impuesto = impuesto
        this.total = total
    }

}
 

class VentaDetalle {
    constructor(producto, cantidad, precio, impuesto) {
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
        this.subtotal = cantidad * precio
        this.impuesto = this.subtotal * (impuesto / 100)
        this.totalItem = this.subtotal * this.impuesto
    }

}

