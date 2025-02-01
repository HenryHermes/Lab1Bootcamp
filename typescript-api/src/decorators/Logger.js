"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = Logger;
function Logger(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`📌 Método llamado: ${key} con argumentos:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
