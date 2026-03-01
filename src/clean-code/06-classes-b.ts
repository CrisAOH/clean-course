(() => {
  // Sin aplicar el principio de responsabilidad única.
  type Gender = "M" | "F";
  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenedFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenedFolder: string;
    constructor({
      workingDirectory,
      lastOpenedFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenedFolder: "/home",
    email: "persona@correo.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthDate: new Date("1985-10-21"),
  });
})();
