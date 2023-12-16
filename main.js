// function randomText() {
    
//     var author =[" Frank Zappa" , "Mae West"];

//     var quote =["So many books, so little time." , "“You only live once, but if you do it right, once is enough.”"];

//     var num= Math.floor(Math.random () * author.length)
  
// }  



  
        var quotes = [
            `“You only live once, but if you do it right, once is enough.” 
            Mae West `,
            `“Be the change that you wish to see in the world.”
            Mahatma Gandhi `,
            `“In three words I can sum up everything I've learned about life: it goes on.”
            Robert Frost `,
            `“If you tell the truth, you don't have to remember anything.”
            Mark Twain `,
            `“A friend is someone who knows all about you and still loves you.”
            Elbert Hubbard`,
           ` “To live is the rarest thing in the world. Most people exist, that is all.”
           Oscar Wilde`,
            `“So many books, so little time.”  Frank Zappa`,
            `“A room without books is like a body without a soul.” Marcus Tullius Cicero`,
            `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” Dr. Seuss`,
            `“We accept the love we think we deserve.”  Stephen Chbosky`
        
            ];

            // var authors=[
            //     "Mae West",
            //     "Mahatma Gandhi",
            //     "Robert Frost",
            //     "Mark Twain",
            //     "Elbert Hubbard",
            //     "Oscar Wilde",
            //     "Frank Zappa",
            //     "Marcus Tullius Cicero",
            //     "Dr. Seuss",
            //     "Stephen Chbosky"

            // ]
    


        var index = 0;

        function getSequentialQuote() {
            document.getElementById("quote").innerHTML = quotes[index] ;

            // Increment the index and reset if it exceeds the array length
            index = (index + 1) % quotes.length;
        }