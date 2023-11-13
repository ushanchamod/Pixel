export const HomeScreenSizeControl = (size: number) => {
  let changes = {gap: 8, cols: 3}
  
  if(size < 400) {
    changes = ({gap: 8, cols: 1})
  }
  else if(size < 600) {
    changes = ({gap: 8, cols: 2})
  }
  else if(size < 900) {
    changes = ({gap: 8, cols: 2})
  }
  
  else if(size < 1200) {
    changes = ({gap: 8, cols: 3})
  }
  else{
    changes = ({gap: 8, cols: 4})
  }

  return changes
}