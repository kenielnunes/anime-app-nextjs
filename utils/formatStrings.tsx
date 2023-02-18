export function convertStringToSlug(string: string) {
    string = string.replace(/^\s+|\s+$/g, "");
    string = string.toLowerCase();

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";

    for (let i = 0, l = from.length; i < l; i++) {
        string = string.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    string = string
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return string;
}
