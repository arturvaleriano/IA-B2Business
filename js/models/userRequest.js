class UserRequest {
    constructor(firstName, lastName, phone, email, companyName, description, file){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.companyName = companyName;
        this.description = description;
        this.file = file;
    }

    get textGmail(){
        return `Nome: ${this.firstName} \n
                Sobrenome: ${this.lastName} \n
                Telefone: ${this.phone} \n
                Email: ${this.email} \n
                Nome da Empresa: ${this.companyName}\n
                Meu problema: ${this.description}`;
    }
}