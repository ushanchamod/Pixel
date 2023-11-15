export const HomeScreenSizeControl = (size: number) => {
  let changes = {gap: 8, cols: 3}
  
  if(size < 400) {
    changes = ({gap: 4, cols: 2})
  }
  else if(size < 650) {
    changes = ({gap: 4, cols: 2})
  }
  else if(size < 1000) {
    changes = ({gap: 4, cols: 3})
  }
  
  else if(size < 1500) {
    changes = ({gap: 4, cols: 4})
  }
  else{
    changes = ({gap: 4, cols: 5})
  }

  return changes
}