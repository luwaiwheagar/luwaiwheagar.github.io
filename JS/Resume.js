var resume_header = "<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Luwai Wheagar's Resume</title><link rel=\"stylesheet\" href=\"CSS/Resume.css\"></head>";
var resume_content = document.getElementById("resume_content");
var resume_footer = "</html>";
var print_button = document.getElementById("print_button");

print_display();

function print_page()
{
    new_window = window.open("");
	new_window.document.write(resume_header);
	new_window.document.write(resume_content.innerHTML);
	new_window.document.write(resume_footer);
    new_window.print();
    new_window.close();
}
function print_display()
{
    var userAgent = navigator.userAgent.toLowerCase();
    if(userAgent.includes("android"))
    {
        print_button.style.display = "none";
    }
    else
    {
        print_button.style.display = "inline";
    }
}