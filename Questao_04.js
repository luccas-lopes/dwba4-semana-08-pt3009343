class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4));
    }

    situacao() {
        if(this.primeiraNota*0.6 + this.segundaNota*0.4 > 6) {
            return "Aprovado";
        }
        return "Reprovado";
    }

    toStringAlert() {
        alert(
        "Nome completo: " + this.nomeCompleto() +
        "\nMédia: " + this.media() + 
        "\nSituação: " + this.situacao()
        );
    }
}

const luccas = new Aluno("Luccas", "Lopes", 6, 7);
// luccas.toStringAlert();

class Students {
    constructor() {
        this.students = [];
    }

    newStudent(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        let student = new Aluno(primeiroNome, segundoNome, primeiraNota, segundaNota);
        this.students.push(student);
        return student;
    }

    get allStudents() {
        return this.students;
    }

    get numberOfStudents() {
        return this.students.length;
    }

    logToStringAlert() {
        for (var i = 0; i < this.students.length; ++i) {
            this.students[i].toStringAlert();
        }
    }

}

let students = new Students();
students.newStudent("Luccas", "Lopes", 9, 8);
students.newStudent("Leonardo", "Gomes", 8, 9);
students.newStudent("Ana", "Clara", 7, 10);
students.newStudent("Daniela", "Gonçalves", 6, 7);
students.newStudent("Marcos", "Carvalho", 5, 10);

students.logToStringAlert();