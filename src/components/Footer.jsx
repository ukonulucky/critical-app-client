import React from 'react'

function Footer() {
    return (
        <footer className="bg-blue-700 text-white text-center py-4 mt-12">
          <p>&copy; {new Date().getFullYear()} BankEase. All rights reserved.</p>
        </footer>
      );
}

export default Footer