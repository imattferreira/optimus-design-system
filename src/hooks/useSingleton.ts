import { useState } from 'react';

const useSingleton = <T>(data: T) => useState<T>(data)[0];

export default useSingleton;
