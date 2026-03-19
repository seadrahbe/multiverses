export function validateForm(data) {
    console.log("Server side validation happens here");
    console.log(data);

    const errors = [];

    if (data.author.trim() == "") {
        errors.push("An author is required.");
    }

    if (data.title.trim() == "") {
        errors.push("A title is required.");
    }

    if (data.poem.trim() == "") {
        errors.push("A poem is required.");
    }

    console.log(errors);
    return {
        isValid: errors.length === 0,
        errors
    }
}