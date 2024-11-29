
       let marks1 = parseFloat(prompt("Enter subject1 marks"));
        let marks2 = parseFloat(prompt("Enter subject2 marks"));
        let marks3 = parseFloat(prompt("Enter subject3 marks"));
        let avg = (marks1 + marks2 + marks3) / 3;
        if (avg >= 90) {
            document.write("Grade: EX");
        } 
        else if (avg >= 80 && avg < 90) {
            document.write("Grade: A+");
        }
         else if (avg >= 70 && avg < 80) {
            document.write("Grade: A");
        } 
        else if (avg >= 60 && avg < 70) {
            document.write("Grade: B+");
        } 
        else {
            document.write("Grade: B");
        }
  