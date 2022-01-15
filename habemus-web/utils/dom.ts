type classname = string | undefined | null

const classNames = (...classes: classname[]) => {
    return classes ? classes.filter(Boolean).join(' ') : '';
};

export {classNames};
