(() => {
  // Sin aplicar el principio de responsabilidad única.
  type Gender = "M" | "F";
  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor(name: string, gender: Gender, birthDate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  const newPersona = new Person("Fernando", "M", new Date("1985-10-21"));

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenedFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "persona@correo.com",
    "Admin",
    "Fernando",
    "M",
    new Date("1985-10-21"),
  );
})();
