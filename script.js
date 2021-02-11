function gradingFunction(grade) {
        if (grade >= 95 && grade <= 100) {
            return "A+ for Awesome Job";
        }
        else if(grade >= 90 && grade <= 94) {
            return "A- for always try harder";
        }
        else if(grade >= 85 && grade <= 89) {
            return "B+ for believing in yourself!";
        }
        else if(grade >= 80 && grade <= 84) {
            return "B- for bringing your grades up!";
        }
        else if(grade >= 75 && grade <= 79) {
            return "C+ is for coming stronger to class!";
        }
        else if(grade >= 70 && grade <= 74) {
            return "C- for continuing to learn!";
        }
        else if(grade >= 65 && grade <= 69) {
            return "D+ for don't give up!";
        }
        else if(grade >= 60 && grade <= 64) {
            return "D- is definately not your best!";
        }
        else if(grade >= 55 && grade <= 59) {
            return "F+ for not completely failing!";
        }
        else(grade >= 50 && grade <= 54)
        return "F- for failing!";
    }
    gradingFunction(87);
