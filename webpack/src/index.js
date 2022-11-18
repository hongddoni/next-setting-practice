function getComponent() {
    return import('lodash').then(({default: _}) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], '');

      return element;
    }).catch((err) => "Errorrrrrr!!")
  }
  
  getComponent().then((component => {
    document.body.appendChild(component);
  }))