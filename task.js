const memorize = (func) => {
    const memory = {};
    return (...args) => {
        //console.log(argsKey);
        if (!memory[argsKey]) {
            let tmp=func(...args);
            memory[argsKey]=tmp;
        }
        //console.log("from cache")
        return memory[argsKey];
    };
};

const DoSomething = memorize((args) => {
    console.log("DoSomething arguments:"+args);
});

DoSomething(2, 3);
DoSomething(2, 3);
DoSomething(2, 3);

const obj1 = {
    a: 1,
    b:  {
            c: 2
        }
};

const obj2 = {
    b:  {
            c: 2
        },
    a: 1
}

DoSomething(obj1, obj2);
