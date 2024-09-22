fn main() {
    let condition = false;
    let number = if condition { 5 } else { 6 };

    println!("\nThe value of number is: {number}\n");
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
