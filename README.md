## Xristos

-   status bar
-   footer
-   backend
-   qna
-   επικοινωνια

## Antonis

-   search bar
-   login page
-   profile
-   register
-   κανε αιτηση
-   οι αιτησεις μου
-   admin
-   home page

## Other

-πως κανω αιτηση

check if we can include every package we want, problem with css scope(child enherits parrent's css)

steps:
pip install pipenv
pipenv install -r requirements.txt
pipenv shell
python manage.py runserver

TODO:
help icons, ask

κανε αιτηση: κουμπια κατω

-κανε αιτηση: select items

login: enter (Δεν χρειάζεται.)

-admin ονομα μαθηματων
-admin accept/reject

-οι αιτησεις μου delete
-admin μαθηματα + - ,
-admin υποβληθεισες αιτησεις name/lastname
-οι αιτησεις μου declined, message print classes

-home page button redirect
login redrects need fixing

απο call:
-κανε αιτηση login promt μονο στο τελευταιο στεπ
-κανε αιτηση οριστικη/προσωρινη μονο αν ειναι logged in και οριστικη disabled εκτος αν ειναι στο τελευταιο βημα + ειναι ολα οκ
-κανε αιτηση breadcrumbs επομενο βημα disabled εκτος αν ειναι συμπληρωμενα ολα τα πεδια
-κανε αιτηση breadcrumbs show better when disabled
κανε αιτηση empty field prompt

-πως κανω αιτηση style

admin:
-λογος απορριψης στο τελος
-αντιστοιχηση μαθηματων αν >1 μαθηματα τοτε disabled accept button

-αναζητηση δεν πρεπει να λειτουργει

Ο χρήστης μπορεί να κάνει προσωρινή αποθήκευση χωρίς να έχει βάλει pdf.
Τι γίνεται στην περίπτωση που ο χρήστης δεν επιλέξει κάτι από την λίστα και γράψει κάτι δικό του;

1. Μπορούμε να τα δεχτούμε όλα (ακόμα και την λάθος χώρα και τα ελληνικά πανεπιστήμια που υποτίθεται πως τα έχουμε συμπληρώσει όλα.) Εδώ θα πρέπει να αλλάξουμε την βάση ώστε να παίρνει οποιαδήποτε τιμή για χωρα/πανεπιστήμιο/τμήμα.
2. Μπορούμε να εμφανίζουμε error όταν δεν βρεθεί στην βάση και να πούμε στην Ρούσου ότι το δοαταπ το δικό μας έχει όλες τις χώρες/πανεπιστήμια/τμήματα του κόσμου γιατί είναι cool.

Προσθήκη περισσότερων πανεπιστημίων, τμημάτων στην βάση για να φαίνονται γεμάτες οι λίστες.

remove go to new application in all pages.
reset lists of country/university/department when they are empty.
