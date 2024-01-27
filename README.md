# Library manager

## Steps to run the application

1. In the mock node server replace the empty book list from line 6 with the mock data I've left in my github:
   [https://github.com/ConstantinHuidu/Library-Manager/blob/master/src/mockData/books.ts](https://github.com/ConstantinHuidu/Library-Manager/blob/master/src/mockData/books.ts)

2. Clone this repo `git clone https://github.com/ConstantinHuidu/Library-Manager`

3. Run `npm install` to install packages

4. Start the project by running `npm run dev`

5. Visit [http://localhost:5173/](http://localhost:5173/)

Feel free to contribute, report issues, or suggest enhancements. Happy reading!

## Quick overview of the app

###### _Scroll to the end to see in app screenshots_

The Library Manager is a web application designed to help users efficiently organize and manage collections of books. Whether you're an avid reader, a student, or a book enthusiast, this app provides a user-friendly interface to handle various book-related tasks.

The project is bootstrapped using **Vite**. It was built with **React** & **Typescript** and it uses **MUI 5** for styling its components. The mocked NodeJS server API endpoints are hit using **AXIOS** and **SWR(useSWR)** helps to fetch and cache data. **Formik** and **Yup** make form handling and validation a breeze!

### Key Features

- **Viewing List of Books**: Easily browse through your collection to see all the books at a glance.

- **View Individual Books and Their Details**: Dive into the specifics of each book, including title, author, genre, and more.

- **Add New Books**: Seamlessly expand your library by adding new books with relevant information.

- **Edit Existing Books**: Keep your collection up-to-date by modifying details of existing books.

- **Delete Books**: Remove unwanted books from your library with a simple delete function.

![dashboard](https://github.com/ConstantinHuidu/Library-Manager/blob/master/src/assets/forReadMe/Dashboard.png)
