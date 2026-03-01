(() => {
  // Aplicando el principio de responsabilidad única.
  // Priorizar la composición frente a la herencia (A menos que sea estrictamente necesario, hay que evitar el uso de extends)
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
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenedFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenedFolder: string;
    constructor({ workingDirectory, lastOpenedFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      workingDirectory,
      lastOpenedFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenedFolder });
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
