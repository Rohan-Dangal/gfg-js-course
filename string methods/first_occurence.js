// Find the first occurrence of the string pat in the string txt. The function returns an integer denoting the first occurrence of the string pat in txt (0-based indexing).

// Note: You are not allowed to use the inbuilt function. If there is no occurrence then return -1.

function findFirstOccurrence(txt, pat) {
    for (let i = 0; i <= txt.length - pat.length; i++) {
        let match = true;

        for (let j = 0; j < pat.length; j++) {
            if (txt[i + j] !== pat[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
}

