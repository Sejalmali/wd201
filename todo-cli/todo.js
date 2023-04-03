const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const ODue = []
    all.forEach(element => {
      if (element.dueDate === yesterday) {
        ODue.push(element)
      }
    })
    return ODue.reverse()
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const TDue = []
      all.forEach(element => {
        if (element.dueDate === today) {
          TDue.push(element)
        }
      })
      return TDue.reverse()
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const LDue = []
      all.forEach(element => {
      if (element.dueDate === tomorrow) {
        LDue.push(element)
      }
    })
    return LDue.reverse()
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      const output = []
      list.forEach((element, index) => {
        if (element.dueDate === yesterday) {
          if (element.completed === true) {
            output.push('[x]' + ' ' + element.title + ' ' + element.dueDate)
          } else {
            output.push('[ ]' + ' ' + element.title + ' ' + element.dueDate)
          }
        } else if (element.dueDate === today) {
          delete element.dueDate
          if (element.completed === true) {
            output.push('[x]' + ' ' + element.title)
          } else {
            output.push('[ ]' + ' ' + element.title)
          }
        } else if (element.dueDate === tomorrow) {
          if (element.completed === true) {
            output.push('[x]' + ' ' + element.title + ' ' + element.dueDate)
          } else {
            output.push('[ ]' + ' ' + element.title + ' ' + element.dueDate)
          }
        }
      })
      return output.reverse().join('\n')
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")