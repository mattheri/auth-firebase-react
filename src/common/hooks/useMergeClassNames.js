const useMergeClassNames = (initialClass, ...additionalClass) => {
	const classnames = [initialClass];

	additionalClass.forEach((className) => {
		if (className) {
			classnames.push(className);
		}
	});
		
	return classnames.join(' ');
}

export default useMergeClassNames;