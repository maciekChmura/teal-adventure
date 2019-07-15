import React from 'react';

function ConsoleInfo() {
  return (
    <>
      {console.log('more info:')}
      {console.log('http://maciek.cloud/do-you-know-about-teal')}
      {console.log(
        'teal rules are loosely translated from free ebook by Andrzej Blikle titled "Doktryna Jakosci"'
      )}
      {console.log(
        'http://www.moznainaczej.com.pl/Download/DoktrynaJakosci/DoktrynaJako%C5%9Bci_wydanie_II.pdf'
      )}
      {console.log(
        'I am not affiliated in any ways with the author of this idea.'
      )}
      {console.log('Just a fan.')}
    </>
  );
}

export default ConsoleInfo;
