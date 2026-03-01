/* Nota: Las interfaces o tipos deberían estar en archivos separados. */
(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Este es el encargado de las operaciones de base de datos.
  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando un correo a los clientes...", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["eduardo@google.com"], "to-clients");
    }
    /*
        Si bien este método tiene más relación directa con los productos, este estaría mejor en una clase donde se lleve a cabo la operación con base de datos.

        loadProduct(id: number) {
        // Realiza un proceso para obtener el producto y retornarlo
        console.log("Producto: ", { id, name: "OLED Tv" });
        }
    */

    /*
        Este caso es similar al anterior.

        saveProduct(product: Product) {
        // Realiza una petición para salvar en base de datos
        console.log("Guardando en base de datos", product);
        }
    */

    /*
        Este método no tiene relación directa con los Productos. Estaría mejor en otra clase donde se implemente la lógica de los carros de compras.


        onAddToCart(productId: number) {
        // Agregar al carrito de compras
        console.log("Agregando al carrito ", productId);
        }
    */
  }

  class CartBloc {
    private items: Object[] = [];

    addToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
