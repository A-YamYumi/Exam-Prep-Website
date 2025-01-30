function change_n(){
    var select_op = document.getElementsByClassName('form-select')[0].value;
    var text_out = document.getElementById('prof_n');

    switch (select_op) {
        case "1":
            text_out.textContent = 'อาจารย์ A';
            break;
        case "2":
            text_out.textContent = 'อาจารย์ B'
            break;
        case "3":
            text_out.textContent = 'อาจารย์ C'
            break;
        case "4":
            text_out.textContent = 'อาจารย์ D'
            break;
        default:
            text_out.textContent = '--เลือกรายวิชา--'
    }
}
// not gonna happened with more than 10+ professors ugh