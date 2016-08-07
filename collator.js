'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['intl'], function (Intl) {
            return Intl.Collator = factory(Intl);
        });

    } else if (typeof exports !== 'undefined') {
        root.Intl.Collator = factory(root.Intl);

    } else {
        root.Intl.Collator = factory(root.Intl);
    }
}(this, function (Intl) {
    if (Intl.Collator !== undefined) {
        return Intl.Collator;
    }

    /**
     * create a stub
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
     * @param {String}|{Array} locales
     * @param {Object} options
     */
    function Collator(locales, options) {
        if (typeof locales === 'string') {
            locales = [locales];
        }

        this.locales = locales.slice(0);

        options = options || {};
        this.options = {
            localeMatcher: options.localeMatcher !== undefined ? options.localeMatcher : 'best fit',
            usage: options.usage !== undefined ? options.usage : 'sort',
            sensitivity: options.sensitivity !== undefined ? options.sensitivity : 'variant',
            ignorePunctuation: options.ignorePunctuation !== undefined ? options.ignorePunctuation : false,
            numeric: options.numeric !== undefined ? options.numeric : false,
            caseFirst: options.caseFirst !== undefined ? options.caseFirst : false
        };
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf
     * @param {String}|{Array} locales
     * @param {Object} options
     * @returns {Array}
     */
    Collator.supportedLocalesOf = function (locales, options) {
        console.warn('The function Collator.supportedLocalesOf is only a stub.');
        return [];
    };

    // prototyping
    Collator.prototype = Object.create(Object.prototype, {
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/format
         * @param {String} string1
         * @param {String} string2
         * @returns {Number}
         */
        compare: {
            value: function (string1, string2) {
                if (typeof string1 !== 'string' || typeof string2 !== 'string') {
                    return NaN;
                }

                if (string1 === string2) {
                    return 0;
                }

                if (string1 < string2) {
                    return -1;
                }

                return 0;
            },
            enumerable: false,
            configurable: false,
            writable: true
        },

        /**
         * @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
         * @var {Array}
         */
        locales: {
            value: true,
            enumerable: false,
            configurable: false,
            writable: true
        },

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         * @var {Object}
         */
        options: {
            value: true,
            enumerable: false,
            configurable: false,
            writable: true
        },

        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions
         * @returns {Object}
         */
        resolvedOptions: {
            value: function () {
                var first;
                if (this.locales.length > 0) {
                    first = this.locales[0];
                }

                return {
                    locale: first,
                    usage: this.options.usage,
                    sensitivity: this.options.sensitivity,
                    ignorePunctuation: this.options.ignorePunctuation,
                    collation: undefined,
                    numeric: this.options.numeric,
                    caseFirst: this.options.caseFirst
                };
            },
            enumerable: false,
            configurable: false,
            writable: true
        }
    });

    return Collator;
}));
