(() => {
  // EJEMPLOS
  /* 
    1. La siguiente variable almacena un objeto con archivos a evaluar. No tiene un nombre claro y el nombre de una de sus propiedades tampoco indica claramente el propósito.
  */
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  /* 
    Para corregir esto, hay que asignarles un nombre que indique claramente su propósito.
  */

  const filesToEvaluate = [
    { id: 1, toDelete: false },
    { id: 2, toDelete: false },
    { id: 3, toDelete: true },
    { id: 4, toDelete: false },
    { id: 5, toDelete: false },
    { id: 7, toDelete: true },
  ];

  /*
    Si vemos esta nueva variable, es muy difícil entender que es lo que se está haciendo. Lo único que podemos entender es que se está usando la variable fs y su propiedad f.
  */

  const arhivos = fs.map((f) => f.f);

  /*
    Con la versión corregida de la variable anterior. Es más fácil comprender que se está haciendo en esta nueva variable y, por lo tanto, también le podemos asignar un nombre más correcto.
  */

  const filesToDelete = filesToEvaluate.map((file) => file.toDelete);

  //--//--//--//--//--//--//--//--//--//--//--//--//--//

  /* 
    Los nombres de estas clases tienen información técnica. Esto lo podemos evitar con el uso de las palabras reservadas del lenguaje de programación.
  */
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  /* 
    Ahora, gracias a las palabras reservadas "class" e "interface", podemos saber que son cada una de estas sin necesidad de indicarlo en el propio nombre.
  */

  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();
  const today = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const numberOfFilesInDirectory: number = 33;

  // primer nombre - first name
  const nombre = "Fernando";
  const firstName: string = "Fernando";

  // primer apellido - last name
  const apellido = "Herrera";
  const lastName: string = "Herrera";

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceLastModification: number = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent: number = 6;
})();
