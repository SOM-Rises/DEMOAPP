export class MyArray {
    constructor(...args) {
      this.array = {};
      this.length = 0;
      if (args.length > 0) {
        for (let i in args) {
          this.array[i] = args[i];
          this.length++;
        }
      }
    }
    getLength() {
      let l;
      for (let i in this.array) {
        l = i;
      }
      return l == undefined ? 0 : Number(l) + 1;
    }
    push(val) {
      this.length = this.getLength();
      if (this.length > 0) {
        this.array[this.length++] = val;
      } else {
        this.array[0] = val;
      }
      this.length = this.getLength();
    }
    pop() {
      this.length = this.getLength();
      let i = 0;
      let temp = {};
      while (i < this.length - 1) {
        temp[i] = this.array[i];
        i++;
      }
      this.array = {};
      this.array = { ...temp };
      this.length = this.getLength();
    }
  
    map(callback) {
      const temp = new MyArray();
      for (let i in this.array) {
        const value = callback(this.array[i], Number(i));
        if (value != undefined) {
          temp.push(value);
        }
      }
      return temp;
    }
  
    forEach(callback) {
      for (let i in this.array) {
        callback(this.array[i], Number(i));
      }
    }
  
    slice(s, l) {
      const temp = new MyArray();
      for (let i = s; i < l; i++) {
        temp.push(this.array[i]);
      }
      return temp;
    }
  
    shift() {
      const temp = new MyArray();
      this.length = this.getLength();
      for (let i = 1; i < this.length; i++) {
        temp.push(this.array[i]);
      }
      this.array = {};
      this.array = { ...temp.array };
      this.length = this.getLength();
    }
  
    unshift() {
      const temp = new MyArray();
      this.length = this.getLength();
      for (let i = 0; i < this.length - 1; i++) {
        temp.push(this.array[i]);
      }
      this.array = {};
      this.array = { ...temp.array };
      this.length = this.getLength();
    }
  
    splice(index, deleteNumber, ...args) {
      this.length = this.getLength();
      let tempArr = new MyArray();
      let finalArr = new MyArray();
      let restArr = new MyArray();
      let start = index,
        end;
  
      for (let i in this.array) {
        tempArr.push(this.array[i]);
      }
      for (let i = 0; i < deleteNumber; i++) {
        end = index + i;
      }
      if (deleteNumber > 0) {
        if (args.length > 0) {
          restArr = tempArr.slice(end + 1, this.length);
          finalArr = tempArr.slice(0, start);
          for (let i in args) {
            finalArr.push(args[i]);
            start++;
          }
          for (let i in restArr.array) {
            finalArr.push(restArr.array[i]);
          }
        } else {
          for (let i in this.array) {
            if (i != index) {
              finalArr.push(this.array[i]);
            } else {
              deleteNumber = deleteNumber - 1;
              if (deleteNumber != 0) {
                index = index + 1;
              }
            }
          }
        }
      } else {
        if (args.length > 0) {
          restArr = tempArr.slice(start, this.length);
          finalArr = tempArr.slice(0, start);
          for (let i in args) {
            finalArr.push(args[i]);
            start++;
          }
          for (let i in restArr.array) {
            finalArr.push(restArr.array[i]);
          }
        } else {
          finalArr.array = { ...this.array };
        }
      }
      this.array = {};
      this.array = { ...finalArr.array };
      this.length = this.getLength();
    }
  }
  
  